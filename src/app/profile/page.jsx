'use client';
import React from 'react';
import { Shield, ThumbsUp, Copy, Award, Flame, Zap, Link } from 'lucide-react';

export default function GameProfileCard() {
    return (
        <div className="max-w-7xl mt-20 mx-auto bg-gradient-to-b from-[#1a120b] via-[#120d08] to-[#0a0705] text-white rounded-xl border border-[#d4af37]/30 shadow-2xl overflow-hidden font-sans p-4">

            {/* Header Section */}
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200">
                        GAME BATTLE
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40 font-semibold">
                        ELITE
                    </span>
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>
            </div>

            {/* Profile Overview */}
            <div className="relative bg-[#241911]/80 rounded-lg p-3 border border-amber-900/40 mb-4">
                <div className="flex items-start gap-3">
                    {/* Avatar Box */}
                    <div className="relative w-16 h-16 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-700 p-0.5 shadow-lg">
                        <div className="w-full h-full bg-[#150f0a] rounded-[7px] flex items-center justify-center relative overflow-hidden">
                            <span className="text-2xl font-black text-amber-400">S</span>
                            <span className="absolute bottom-0 right-0 bg-amber-500 text-black text-[9px] font-bold px-1 rounded-tl">
                                Lv.62
                            </span>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-base text-amber-100 tracking-wide">
                                TE AMAN
                            </h3>
                            <div className="flex items-center gap-1 text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded text-xs border border-amber-800/50">
                                <ThumbsUp className="w-3 h-3" />
                                <span className="font-semibold">23,441</span>
                            </div>
                        </div>

                        <p className="text-xs text-amber-300/70 mt-0.5">中文 (繁)</p>

                        <div className="flex items-center gap-2 mt-2 text-xs text-amber-200/80">
                            <span className="bg-[#100a06] px-2 py-0.5 rounded border border-amber-900/30 font-mono text-[11px]">
                                UID: 7398614303
                            </span>
                            <button
                                onClick={() => navigator.clipboard?.writeText('7398614303')}
                                className="hover:text-amber-400 transition-colors"
                                title="Copy UID"
                            >
                                <Copy className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rank & Emblem Section */}
            <div className="bg-[#1c130d] rounded-lg p-3 border border-amber-900/30 mb-4">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" />
                    Clash Squad Rank
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                    {/* Rank 1 */}
                    <div className="bg-[#130d08] p-2 rounded border border-amber-500/20 flex flex-col items-center">
                        <Flame className="w-6 h-6 text-red-500 mb-1" />
                        <span className="text-[10px] text-amber-300/70">★ 7</span>
                        <span className="text-xs font-bold text-amber-100">539</span>
                    </div>

                    {/* Rank 2 - Emblem */}
                    <div className="bg-[#130d08] p-2 rounded border border-amber-500/40 flex flex-col items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-amber-500/5 animate-pulse" />
                        <Award className="w-6 h-6 text-amber-400 mb-1" />
                        <span className="text-[10px] font-bold text-amber-400 tracking-tighter">
                            HEROIC EMBLEM
                        </span>
                        <span className="text-xs font-extrabold text-yellow-300">17</span>
                    </div>

                    {/* Rank 3 - Role */}
                    <div className="bg-[#130d08] p-2 rounded border border-amber-500/20 flex flex-col items-center">
                        <Zap className="w-6 h-6 text-yellow-500 mb-1" />
                        <span className="text-[10px] font-bold text-amber-400">RUSHER</span>
                        <span className="text-xs font-bold text-amber-100">6</span>
                    </div>
                </div>
            </div>

            {/* Badges / Levels */}
            <div className="grid grid-cols-5 gap-1.5 mb-4">
                {[
                    { label: 'Lv.37', color: 'from-amber-600 to-amber-800' },
                    { label: 'Lv.142', color: 'from-yellow-600 to-amber-700' },
                    { label: 'Lv.160', color: 'from-orange-600 to-amber-800' },
                    { label: 'Lv.161', color: 'from-amber-500 to-yellow-600' },
                    { label: 'Lv.153', color: 'from-yellow-500 to-amber-600' }
                ].map((badge, idx) => (
                    <div
                        key={idx}
                        className={`bg-gradient-to-b ${badge.color} p-0.5 rounded text-center border border-amber-400/30 shadow`}
                    >
                        <div className="bg-[#120c08] rounded-[2px] py-1.5 flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-amber-400/20 mb-1 border border-amber-400/50" />
                            <span className="text-[10px] font-bold text-amber-200">{badge.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner Announcement / Status */}
            <div className="bg-gradient-to-r from-amber-950/60 via-[#26170d] to-amber-950/60 border border-amber-500/30 rounded-lg p-2.5 text-center text-xs text-amber-200">
                <p className="font-medium">
                    গ্লোরি বট বা লাইক বট লাগলে Contact us on WhatsApp ✓
                </p>
            </div>
        </div>

    );
}