import axios from "axios";
import Lead from "../models/lead.js";

export const processLeads = async (req, res) => {
  try {
    const { names } = req.body;

    if (!names || !names.length) {
      return res.status(400).json({ message: "No names provided" });
    }

    const results = await Promise.all(
      names.map(async (name) => {
        const response = await axios.get(
          `https://api.nationalize.io?name=${name}`
        );

        const countryData = response.data.country[0];
        const probability = countryData?.probability || 0;

        return await Lead.create({
          name,
          country: countryData?.country_id || "Unknown",
          confidence: Math.round(probability * 100),
          status: probability > 0.6 ? "Verified" : "To Check",
        });
      })
    );

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
