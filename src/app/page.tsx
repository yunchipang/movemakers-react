import Link from "next/link";

export default function Home() {
  return (
    <section style={{ textAlign: "center", margin: "0 auto" }}>
      <h1 style={{ marginTop: "60px" }}>Welcome to MoveMakers🕺🏻</h1>
      <ul>
        <li>
          <Link
            href="https://github.com/yunchipang/movemakers-react"
            target="_blank"
          >
            movemakers-react
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/yunchipang/movemakers-fastapi"
            target="_blank"
          >
            movemakers-fastapi
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/yunchipang/movemakers-ios-app"
            target="_blank"
          >
            movemakers-ios-app
          </Link>
        </li>
      </ul>
    </section>
  );
}
