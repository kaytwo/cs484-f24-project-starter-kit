import { db, Comment } from "astro:db";

export default async function () {
  await db.insert(Comment).values([
    { author: "1", body: "Hope you like Astro DB!" },
    { author: "2", body: "Enjoy!" },
  ]);
}
