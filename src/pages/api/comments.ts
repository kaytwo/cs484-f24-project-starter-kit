import type { APIRoute } from "astro";
import { db, Comment } from "astro:db";

export const POST: APIRoute = async ({ locals, request }) => {
  try {
    const formData = await request.formData();
    const comment = formData.get("comment");
    const { userId } = locals.auth();

    if (!comment || !userId || typeof comment !== "string") {
      return new Response("Missing comment or author", { status: 400 });
    }

    await db.insert(Comment).values([{ author: userId, body: comment }]);

    return new Response(null, {
      status: 303,
      headers: {
        Location: "/dashboard",
      },
    });
  } catch (error) {
    return new Response("Error adding comment", { status: 500 });
  }
};
