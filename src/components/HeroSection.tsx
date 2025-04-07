import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Users, Percent } from "lucide-react";
import { Card } from "./ui/card";

interface HeroSectionProps {
  poolPerformance?: number;
  totalStake?: number;
  roi?: number;
  onDelegateClick?: () => void;
}

const HeroSection = ({
  poolPerformance = 100,
  totalStake = 3800000,
  roi = 4.5,
  onDelegateClick = () => console.log("Delegate clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] w-full bg-gradient-to-br from-orange-950/90 via-slate-900/95 to-orange-950/90 text-white px-4 md:px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-300 to-orange-100 leading-tight tracking-tight"
            >
              Stake with Confidence in The Dutch Pool
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-orange-100/80"
            >
              Join a reliable stake pool with proven performance and competitive
              rewards
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() => onDelegateClick?.()}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
              >
                Delegate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 bg-orange-950/40 backdrop-blur border-orange-900/20 hover:bg-orange-950/50 transition-colors duration-300">
                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="h-8 w-8 mb-2 text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-50">
                    {poolPerformance}%
                  </h3>
                  <p className="text-orange-200/70">Pool Performance</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="p-6 bg-orange-950/40 backdrop-blur border-orange-900/20 hover:bg-orange-950/50 transition-colors duration-300">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 mb-2 text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-50">
                    {(totalStake / 1000000).toFixed(1)}M
                  </h3>
                  <p className="text-orange-200/70">Total Stake (₳)</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="p-6 bg-orange-950/40 backdrop-blur border-orange-900/20 hover:bg-orange-950/50 transition-colors duration-300">
                <div className="flex flex-col items-center text-center">
                  <Percent className="h-8 w-8 mb-2 text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-50">{roi}%</h3>
                  <p className="text-orange-200/70">Annual ROI</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
