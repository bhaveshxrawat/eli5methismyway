import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Card {
  topic: string;
  definition: string;
  explanation: string;
  example: string;
}
const AskResultCard = ({ topic, definition, explanation, example }: Card) => {
  return (
    <Card>
      <CardHeader className="text-2xl font-semibold">{topic}</CardHeader>
      <CardContent className="space-y-4">
        <article className="space-y-2">
          <h3 className="text-lg font-semibold">Definition</h3>
          <p>{definition}</p>
        </article>
        <article className="space-y-2">
          <h3 className="text-lg font-semibold">Explanation</h3>
          <p>{explanation}</p>
        </article>
        <article className="space-y-2">
          <h3 className="text-lg font-semibold">Example</h3>
          <p>{example}</p>
        </article>
      </CardContent>
    </Card>
  );
};

export default AskResultCard;
