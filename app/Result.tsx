type ResultProps = {
  result: Array<Record<string, string>> | undefined;
};

export default function Result({ result }: ResultProps) {
  console.log(result);
  return <p>{result ? "results!" : "nothing to show"}</p>;
}
