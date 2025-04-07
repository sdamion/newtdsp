import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import PoolMetrics from "./PoolMetrics";
import TechnicalSpecs from "./TechnicalSpecs";
import BackgroundEffects from "./BackgroundEffects";
import { useTheme } from "../providers/theme-provider";
import { Button } from "./ui/button";
import { ExternalLink, Twitter } from "lucide-react";
import DelegateDialog from "./DelegateDialog";

const Home = () => {
  const { theme, setTheme } = useTheme();

  const [delegateOpen, setDelegateOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen w-full bg-background">
      <BackgroundEffects />

      <Navigation
        isDarkMode={theme === "dark"}
        onThemeToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <main className="pt-16">
        <section id="home">
          <HeroSection onDelegateClick={() => setDelegateOpen(true)} />
          <DelegateDialog open={delegateOpen} onOpenChange={setDelegateOpen} />
        </section>

        <section id="metrics">
          <PoolMetrics />
        </section>

        <section id="specs">
          <TechnicalSpecs />
        </section>

        <section id="about" className="py-24 bg-background/60 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              About The Operator
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">
                    Professional Background
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      With 20 years of experience as an IT consultant, I have
                      specialized as a DevOps engineer, focusing on building and
                      maintaining robust IT infrastructures.
                    </p>
                    <p>
                      In the blockchain space, I bring extensive experience,
                      having successfully managed a mining farm with 22 GPUs
                      dedicated to Ethereum mining.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">
                    Cardano Ecosystem Involvement
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      As a Cardano DRep, I actively represent stakeholders and
                      help drive decentralized decision-making within the
                      ecosystem.
                    </p>
                    <p>
                      I had the honor of serving as a delegate at the Cardano
                      Constitutional Convention, contributing to shaping the
                      future of governance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold">Infrastructure</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">
                      Server 1 - HP Z440
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Intel XEON E5-2660 v4</li>
                      <li>• 192GB Memory</li>
                      <li>• 11TB HDD (5 disks, 1 parity disk)</li>
                      <li>• Blockproducer Node1 and Relay Node1 (in 2 VMs)</li>
                    </ul>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">
                      Server 2 - Asrock B550
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AMD Ryzen 5 5600G</li>
                      <li>• 128GB Memory</li>
                      <li>• 28TB HDD (RAID10)</li>
                      <li>• Relay Node2 and Iagon Storage Node1</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">
                  Additional Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">
                      Starch Mining Stats
                    </h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>TDSP 01: 149,999,998 STRCH | 6 Miners</p>
                      <p>TDSP 02: Available for expansion</p>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open("https://x.com/DamionDutch", "_blank")
                        }
                      >
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter/X
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(
                            "https://gov.tools/connected/drep_directory/drep1u634jgjwly7gqd90tuhqrwayze2x0revzz657tael3kpq24uxpl",
                            "_blank",
                          )
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        DRep Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/50 rounded-lg">
                <p className="font-mono text-sm break-all text-center">
                  Pool ID:
                  pool1ksye6zwlzaytspldngc3966aj79zkjvmkykydu2txay75c0krfp
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background/80 backdrop-blur-sm border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} The Dutch Stake Pool. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
