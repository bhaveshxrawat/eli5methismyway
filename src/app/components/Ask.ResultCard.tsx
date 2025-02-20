import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import "./Animations.css";

interface Card {
  topic: string;
  explanation: string;
}
const AskResultCard = ({ topic, explanation }: Card) => {
  return (
    <Card className="wave-in">
      <CardHeader className="text-2xl font-semibold">{topic}</CardHeader>
      <CardContent className="space-y-4">
        <article className="space-y-2">
          <h3 className="text-lg font-semibold">Explanation</h3>
          <div>
            <ReactMarkdown>{explanation}</ReactMarkdown>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default AskResultCard;
