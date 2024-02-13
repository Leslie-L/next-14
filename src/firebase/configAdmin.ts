import * as admin from 'firebase-admin';

/* eslint-disable import/prefer-default-export */
import { credential } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';

const serviceAccount:any = {
  "type": "service_account",
  "project_id": "e-commercenext",
  "private_key_id": process.env.ADMIN_FB_private_key_id,
  "private_key": process.env.ADMIN_FB_private_key,
  "client_email": "firebase-adminsdk-zcibd@e-commercenext.iam.gserviceaccount.com",
  "client_id": process.env.ADMIN_FB_client_id,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zcibd%40e-commercenext.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

if (!admin.apps.length) {
 initializeApp({
   credential: credential.cert(serviceAccount),
 });
}


export const adminSDK = admin;