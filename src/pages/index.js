import HomeComponent from "@/components/home/HomeComponent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MedBuddy</title>
        <meta
          name="description"
          content="a Health Solution"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/medbuddymask.jpg" />
      </Head>
      <HomeComponent/>
    </>
  );
}
