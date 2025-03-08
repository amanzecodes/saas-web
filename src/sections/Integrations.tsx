import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import Image from "next/image";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export default function Integrations() {
    return (
        <section>
            <div className="container">
                <Tag>Integrations</Tag>
                <h2>
                    Plays well with <span>others</span>
                </h2>
                <p>
                    Layers seamlessly connect to your favourite tools, maing it
                    easy to plug into any workflow and collaborate acorss
                    platforms
                </p>
                <div>
                    {integrations.map((integration, index) => (
                        <div key={index}>
                            <div>
                                <Image
                                    src={integration.icon}
                                    alt={integration.name}
                                    />
                            </div>
                            <h3>{integration.name}</h3>
                            <p>{integration.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
