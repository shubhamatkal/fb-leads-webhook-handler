# 🏡 Facebook Lead Ads Integration Guide

This guide helps you connect your Facebook Lead Ads to our system so leads are automatically synced to your dashboard.

---

## ✅ Step 1: Open Facebook App Dashboard

1. Visit: [https://developers.facebook.com](https://developers.facebook.com)
2. Go to **My Apps** → Select your app
3. In the left menu, click on **Webhooks**

---

## ✅ Step 2: Add Webhook URL

1. Under **Page**, click **Add Callback URL**
2. Fill in the fields:

   - **Callback URL**:  
     `https://<your-ngrok-or-server-url>/webhook`

   - **Verify Token**:  
     `YOUR_VERIFY_TOKEN`

3. Click **Verify and Save**

---

## ✅ Step 3: Subscribe to Fields

1. Click **Subscribe to Fields**
2. Select the following:

   - `leadgen`
   - `leadgen_id`
   - `form_id`

---

## ✅ Step 4: Grant Page Permissions

1. Ensure you are the **admin** of your Facebook Page
2. Go to: [Facebook Business Integrations](https://www.facebook.com/settings?tab=business_tools)
3. Click on the connected app
4. Make sure the following permissions are enabled:
   - `pages_manage_ads`
   - `pages_read_engagement`
   - `leads_retrieval`

---

## ✅ Step 5: Share Page ID

1. Go to your Facebook Page
2. Click **About**
3. Scroll to find **Page ID**
4. Share this ID with us

---

## 📩 Need Help?

Contact our support team:  
**shubhamatkal@gmail.com**

