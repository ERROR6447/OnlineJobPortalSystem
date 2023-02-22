/* Restricted api routes*/
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.send({
      content: "Protected Content",
    });
  } else {
    res.send({
      error: "Sign in to view content",
    });
  }
};

export default handler;
