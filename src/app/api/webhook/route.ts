import { NextResponse } from "next/server";
import crypto from "crypto";
console.log("Webhook secret loaded:", process.env.COINBASE_COMMERCE_WEBHOOK_SECRET ? "✅ Found" : "❌ Missing");


// Coinbase Commerce webhook secret (from dashboard → Settings → Webhooks)
const WEBHOOK_SECRET = process.env.COINBASE_COMMERCE_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text(); // get raw request body
    const signature = req.headers.get("x-cc-webhook-signature");

    if (!signature || !WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
    }

    // Verify Coinbase Commerce signature
    const expectedSignature = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // Parse event payload
    const event = JSON.parse(rawBody);

    console.log("🔔 Webhook Event Received:", event.type);

    if (event.type === "charge:confirmed") {
      console.log("✅ Payment confirmed:", event.data.code);

      // TODO: update database with active subscription
    }

    if (event.type === "charge:failed") {
      console.log("❌ Payment failed:", event.data.code);

      // TODO: handle failed payment logic
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing error" }, { status: 500 });
  }
}
