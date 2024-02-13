import { defineEventHandler, readBody } from "#imports"
import { OAuth2Client } from 'google-auth-library';
import { useRuntimeConfig, createError } from "nuxt/app";

// Get Runtime config variables
const config = useRuntimeConfig();

// create google client
const googleClientId = config.googleClientId
const client = new OAuth2Client(googleClientId);

// API event handler
export default defineEventHandler(async (event) => {
  const body =  await readBody(event);
  const token = body.token;

  if(!token){
    throw createError ({
      statusCode: 400,
      statusMessage: 'No token or Invaild token'
    })
  }
  const user = verify(token).catch(console.error);

  return user;
  // return {
  //   token: body.token
  // };
});

/**
 * @desc verifies JSON web token and returns user data if token is valid
 * @param token JSON web token from google
 * @returns
 */

async function verify(token: string) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: googleClientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();

  return payload;
  // const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}