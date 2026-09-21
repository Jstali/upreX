import React, { useState, useEffect, useRef } from 'react';

interface LogMessage {
  id: number;
  agent: string;
  action: string;
  status: 'active' | 'success' | 'executing';
  time: string;
}

const AGENTS = [
  { name: 'CoreAgent // Alpha', role: 'Architecture & Orchestration', color: 'text-cyan-400' },
  { name: 'CodeGen // Nova', role: 'Full-Stack Software Synthesis', color: 'text-purple-400' },
  { name: 'GrowthBot // Echo', role: 'Algorithmic Marketing & CRO', color: 'text-pink-400' },
  { name: 'CloudOps // Sentinel', role: 'Kubernetes & Security Hardening', color: 'text-emerald-400' },
];

export const AiAgentSandbox: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState(AGENTS[0]);
  const [logs, setLogs] = useState<LogMessage[]>([
    { id: 1, agent: 'CoreAgent // Alpha', action: 'Initialized autonomous decision loop [model: deep-reasoning-v2]', status: 'success', time: '00:00:01' },
    { id: 2, agent: 'CodeGen // Nova', action: 'Synthesizing React + Three.js spatial pipeline with zero bundle bloat', status: 'success', time: '00:00:02' },
    { id: 3, agent: 'GrowthBot // Echo', action: 'Analyzing user clickstream: conversion probability rated at 94.2%', status: 'executing', time: '00:00:03' },
    { id: 4, agent: 'CloudOps // Sentinel', action: 'Multi-region Kubernetes cluster synced across 3 edge locations', status: 'active', time: '00:00:04' },
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPrompt.trim() || isProcessing) return;

    const userPrompt = inputPrompt;
    setInputPrompt('');
    setIsProcessing(true);

    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    const newLog: LogMessage = {
      id: Date.now(),
      agent: selectedAgent.name,
      action: `Executing custom objective: "${userPrompt}"`,
      status: 'executing',
      time,
    };

    setLogs((prev) => [...prev, newLog]);

    setTimeout(() => {
      const responseLog: LogMessage = {
        id: Date.now() + 1,
        agent: selectedAgent.name,
        action: `Objective successfully resolved: Autonomous agent pipeline delivered optimized code & assets.`,
        status: 'success',
        time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      };
      setLogs((prev) => [...prev, responseLog]);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-5 md:px-12 my-24 select-none">
      <div className="relative rounded-3xl border border-white/20 bg-neutral-950/90 backdrop-blur-xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,242,254,0.1)] overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-[10px] uppercase text-cyan-300 tracking-widest">
                Interactive Simulation
              </span>
            </div>
            <h3 className="font-sans font-bold text-3xl text-white">
              uperX Autonomous AI Agent Terminal
            </h3>
          </div>
          <span className="font-mono text-xs text-neutral-400 mt-2 md:mt-0">
            [ State: Autonomous Orchestration Active ]
          </span>
        </div>

        {/* Agent Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {AGENTS.map((agent) => {
            const isSelected = selectedAgent.name === agent.name;
            return (
              <button
                key={agent.name}
                onClick={() => setSelectedAgent(agent)}
                className={`px-4 py-2 rounded-xl border text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-500/20 text-white font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'border-white/10 bg-black/40 text-neutral-400 hover:border-white/30'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{agent.name}</span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">{agent.role}</div>
              </button>
            );
          })}
        </div>

        {/* Console Log Screen */}
        <div
          ref={logContainerRef}
          className="h-64 md:h-72 w-full rounded-2xl bg-black/80 border border-white/10 p-5 font-mono text-xs overflow-y-auto space-y-3 shadow-inner"
        >
          {logs.map((log) => (
            <div key={log.id} className="flex items-start space-x-3 leading-relaxed">
              <span className="text-neutral-500 text-[11px] shrink-0">[{log.time}]</span>
              <span className="text-cyan-400 font-bold shrink-0">{log.agent}:</span>
              <span className={log.status === 'success' ? 'text-neutral-200' : 'text-amber-300'}>
                {log.action}
              </span>
            </div>
          ))}
          {isProcessing && (
            <div className="flex items-center space-x-2 text-cyan-400 animate-pulse text-xs">
              <span>▹</span>
              <span>{selectedAgent.name} reasoning and evaluating actions...</span>
            </div>
          )}
        </div>

        {/* Command Input Box */}
        <form onSubmit={handleCommand} className="mt-4 flex gap-3">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder={`Instruct ${selectedAgent.name} (e.g. "Deploy scalable microservice on Kubernetes", "Run viral growth experiment")...`}
            className="flex-1 px-5 py-3.5 rounded-xl bg-black/60 border border-white/20 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <button
            type="submit"
            disabled={isProcessing}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 shrink-0"
          >
            Dispatch Agent ⚡
          </button>
        </form>
      </div>
    </section>
  );
};
