// Components
import Layout from "../components/layout";
import CtaButton from "../components/buttons/cta-btn";

// Hooks
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <div className="flex h-64 flex-col align-center justify-center">
        <div className="text-center">
          <Link href="/mint">
            <CtaButton>Go to Mint</CtaButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
