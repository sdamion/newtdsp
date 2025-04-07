import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Percent, DollarSign, Wallet, Users } from "lucide-react";

interface PoolMetric {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

interface PoolMetricsProps {
  metrics?: PoolMetric[];
}

const defaultMetrics: PoolMetric[] = [
  {
    title: "Pool Margin",
    value: "1%",
    description: "Competitive margin fee to maximize your staking rewards",
    icon: <Percent className="h-6 w-6" />,
  },
  {
    title: "Fixed Cost",
    value: "170 ADA",
    description: "Minimum fixed cost per epoch as per protocol parameters",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: "Total Stake",
    value: "2,813 ADA",
    description: "Current total stake in the pool",
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    title: "Delegators",
    value: "5",
    description: "Active delegators supporting our pool",
    icon: <Users className="h-6 w-6" />,
  },
];

const PoolMetrics = ({ metrics = defaultMetrics }: PoolMetricsProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 bg-background/60 backdrop-blur-lg">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600"
      >
        Pool Metrics
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full"
                >
                  <Card className="w-full h-full bg-card hover:bg-orange-500/5 transition-colors duration-200 border-orange-900/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-xl font-medium">
                        {metric.title}
                      </CardTitle>
                      {metric.icon}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{metric.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default PoolMetrics;
