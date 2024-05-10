import Link from "next/link";

import { Suspense } from "react";

import classes from "./page.module.css";
import UsersGrid from "@/components/users/users-grid.module";
import { getUsersAction } from "@/lib/actions";

async function Users() {
  const users = await getUsersAction();

  return <UsersGrid users={users} />;
}

export default function UsersPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Our team, managed <span className={classes.highlight}>by you</span>
        </h1>
        <p>Add new member to our team </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Add new member</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Getting users...</p>}
        >
          <Users />
        </Suspense>
      </main>
    </>
  );
}
