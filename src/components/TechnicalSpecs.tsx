import React from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Server, Shield, Clock, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface TechnicalSpecsProps {
  serverUptime?: number;
  networkLatency?: number;
  securityScore?: number;
  processingPower?: number;
}

const TechnicalSpecs = ({
  serverUptime = 100,
  networkLatency = 10,
  securityScore = 100,
  processingPower = 95,
}: TechnicalSpecsProps) => {
  const specs = [
    {
      icon: Server,
      title: "Server Uptime",
      value: serverUptime,
      suffix: "%",
      description: "24/7 server availability",
    },
    {
      icon: Clock,
      title: "Network Latency",
      value: networkLatency,
      suffix: "ms",
      description: "Average response time",
    },
    {
      icon: Shield,
      title: "Security Score",
      value: securityScore,
      suffix: "%",
      description: "Enterprise-grade security",
    },
    {
      icon: Cpu,
      title: "Processing Power",
      value: processingPower,
      suffix: "%",
      description: "Server utilization",
    },
  ];

  return (
    <section className="w-full min-h-[500px] bg-background/60 backdrop-blur-lg py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
            Technical Specifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our infrastructure is built for reliability, security, and
            performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-orange-500/10">
                    <spec.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                  <div className="w-full mb-2">
                    <Progress value={spec.value} className="h-2" />
                  </div>
                  <p className="text-2xl font-bold text-orange-500 mb-2">
                    {spec.value}
                    {spec.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {spec.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
