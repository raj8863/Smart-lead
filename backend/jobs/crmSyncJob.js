import cron from "node-cron";
import Lead from "../models/lead.js";

cron.schedule("*/5 * * * *", async () => {
  const leads = await Lead.find({
    status: "Verified",
    synced: false,
  });

  for (const lead of leads) {
    console.log(`[CRM Sync] Sending verified lead ${lead.name} to Sales Team...`);
    lead.synced = true;
    await lead.save();
  }
});
