import MarkdownRenderer from "@/components/ui/markdown-renderer";
export default function Page() {
  return (
    <section className="px-4 w-full text-center privacy-policy">
      <div className="text-left max-w-4xl mx-auto py-16 md:py-28">
        <MarkdownRenderer markdownUrl="https://raw.githubusercontent.com/sparkpointio/sparkpoint.io-privacy-policy/main/README.md" />
      </div>
    </section>
  );
}