import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-modify-playback-state"
].join(",");

const params = {
  scope: scopes,
};

const query = new URLSearchParams(params).toString();
const LOGIN_URL = "https://accounts.spotify.com/authorize?" + query;

async function refreshAccesToken(token) {
  //rfrescar token
  const params = new URLSearchParams()
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token.refreshToken)
  const res = fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(process.env.SPOTIFY_CLIENTID + ":" + process.env.SPOTIFY_SECRET).toString("base64"),
    },
    body: params
  });

  const data = await res.json();

  return {
    accessToken: data.acces_token,
    refreshToken: data.refresh_token ?? token.refreshToken,
    accessTokenExpires: Date.now() + data.expires_at * 1000
  }

}

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENTID,
      clientSecret: process.env.SPOTIFY_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;
        return token;
      }

      if (Date.now() < token.accessTokenExpires * 1000) {
        return token;
      }
      return refreshAccesToken(token);
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
