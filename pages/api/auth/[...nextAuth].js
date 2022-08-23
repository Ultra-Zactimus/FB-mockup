import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";

const options = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
}

export default (req, res) => NextAuth(req, res, options);