interface CaseStudy {
    id: string;
    badge: string;
    title: string;
    description: string;
    cardContent: string;
    background: string;
    objective: string;
    question1: string;
    question2: string;
    question3: string
}

export const caseStudies: CaseStudy[] = [
    {
        id: "coffee-chain",
        badge: "McKinsey-Style",
        title: "Global Expansion of a Specialty Coffee Chain",
        description: "This case simulates a realistic McKinsey-style consulting problem, challenging you to analyze market attractiveness, strategic fit, and entry strategies for a specialty coffee chain considering international expansion. Similar to McKinsey interviews, it requires a structured, MECE approach to decision-making, focusing on identifying key opportunities and potential risks.",
        cardContent: "A specialty coffee chain plans to expand internationally, targeting either Europe or Southeast Asia. Analyze both regions for market size, competition, and strategic fit. Recommend an optimal entry strategy (e.g., joint venture, franchising, or fully owned stores) and consider how to mitigate operational, cultural, and financial risks.",
        background: "A specialty coffee chain, currently successful in its domestic market, is considering expanding internationally. The chain prides itself on serving high-quality, ethically sourced coffee, and creating a unique customer experience centered around comfortable seating, high-speed internet, and premium customer service. The company currently operates 250 stores in its home market, which are highly profitable. The leadership is evaluating whether to expand into new international markets, with a particular focus on Europe or Southeast Asia. They need to determine which region offers the best opportunity for growth, and how they should approach the expansion.",
        objective: "Determine the best international market for expansion and devise an entry strategy. Key questions involve:",
        question1: "Should the company expand into Europe or Southeast Asia?",
        question2: "What entry strategy (e.g., joint venture, franchising, fully owned stores) would be most suitable for the selected market?",
        question3: "What potential challenges should the company anticipate, and how can these be mitigated?",
    },
    {
        id: "manufacturing-chain",
        badge: "BCG-Style",
        title: "Turnaround Strategy for a Manufacturing Company",
        description: "This case is designed to simulate the BCG approach by focusing on a holistic analysis of a company’s operational and strategic challenges. BCG is known for its emphasis on understanding the broad strategic landscape while diving deep into actionable initiatives, and this case reflects that methodology.",
        cardContent: "A manufacturing company is experiencing declining profitability. Your task is to identify key issues and devise a strategy to stabilize the company, focusing on cost-cutting, revenue growth, and strategic positioning. Where would you begin?",
        background: "A mid-sized manufacturing company, specializing in industrial machinery, has seen its profitability decline over the past three years. The company’s products are known for their durability and quality, but they have struggled to maintain market share in the face of increasing competition from low-cost competitors in Southeast Asia. Additionally, rising raw material costs and operational inefficiencies are squeezing margins. The board has brought in your consulting team to devise a strategy to return the company to profitability.",
        objective: "Develop a turnaround strategy to stabilize the company's financials, regain market share, and improve operational efficiency.",
        question1: "What is driving the decline in profitability?",
        question2: "Which areas should be prioritized to reduce costs or increase revenues?",
        question3: "How should the company position itself to stay competitive in the changing market landscape?",
    },
    {
        id: "coffee-chain",
        badge: "McKinsey-Style",
        title: "Global Expansion of a Specialty Coffee Chain",
        description: "This case simulates a realistic McKinsey-style consulting problem, challenging you to analyze market attractiveness, strategic fit, and entry strategies for a specialty coffee chain considering international expansion. Similar to McKinsey interviews, it requires a structured, MECE approach to decision-making, focusing on identifying key opportunities and potential risks.",
        cardContent: "A specialty coffee chain plans to expand internationally, targeting either Europe or Southeast Asia. Analyze both regions for market size, competition, and strategic fit. Recommend an optimal entry strategy (e.g., joint venture, franchising, or fully owned stores) and consider how to mitigate operational, cultural, and financial risks.",
        background: "A specialty coffee chain, currently successful in its domestic market, is considering expanding internationally. The chain prides itself on serving high-quality, ethically sourced coffee, and creating a unique customer experience centered around comfortable seating, high-speed internet, and premium customer service. The company currently operates 250 stores in its home market, which are highly profitable. The leadership is evaluating whether to expand into new international markets, with a particular focus on Europe or Southeast Asia. They need to determine which region offers the best opportunity for growth, and how they should approach the expansion.",
        objective: "",
        question1: "",
        question2: "",
        question3: "",
    },
];