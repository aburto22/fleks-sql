import Container from "./Container";

export default async function Home() {
  return (
    <div className="text-fleks-dark">
      <header>
        <h1 className="py-6 text-3xl font-bold text-center text-white bg-fleks-dark">
          Subscription Periods Cost Summary
        </h1>
      </header>
      <Container />
    </div>
  );
}
