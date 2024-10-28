"use client";

import FormAsk from "@/app/components/Form.Ask";
import AskResultCard from "./Ask.ResultCard";
import {useState} from "react";
import type {AIRes} from "./interfaces";
import SuggestionsWrapper from "./Suggestions.Wrapper";

const Wrapper = () => {
    const [aiRes, setAIRes] = useState<AIRes | null>(null);
    return (
        <div className="space-y-5">
            {aiRes ? (
                <AskResultCard
                    definition={aiRes.definition}
                    topic={aiRes.topic}
                    example={aiRes.example}
                    explanation={aiRes.explanation}
                />
            ) : null}
            <FormAsk setAIRes={setAIRes}/>
            {!aiRes ? <SuggestionsWrapper setAIRes={setAIRes}/> : null}
        </div>
    );
};

export default Wrapper;
