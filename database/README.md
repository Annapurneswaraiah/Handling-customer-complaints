



# 🗄️ **Database Details – MongoDB**

This folder includes everything you need to understand and set up the **MongoDB** database for the **ResolveNow** project.

---

## 📁 **Folder Contents**

➡️ `mongodb_schema.json` — Defines all collections and fields used in MongoDB 

➡️ `db-config.js` — Mongoose configuration and connection setup

➡️ `sample_data.json` — Optional: Sample data for testing

➡️ `ERD.png` — Visual **Entity Relationship Diagram** of the database structure

---

## ⚙️ **MongoDB Version**

✅ Tested with **MongoDB 6.0** using **Mongoose ODM (Object Data Modeling)**

---

## 🚀 **Setup Instructions**

1️⃣ **Install MongoDB** locally ***or*** create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
 
 2️⃣ **Connect your app** using the credentials in `db-config.js`

3️⃣ **Populate test data** (optional):

```bash
mongoimport --uri "your_connection_string" --collection complaints --file sample_data.json --jsonArray

