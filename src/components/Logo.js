'use client'
import React from 'react'

const Logo = ({ size = 120 }) => {
    return (
        <div className="relative flex items-center justify-center group">

            {/* Soft White Glow */}
            <div className="absolute inset-0 bg-white/20 blur-2xl opacity-60 group-hover:opacity-90 transition duration-500 rounded-full"></div>

            {/* Glass Background */}
            <div className="relative px-3 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">

                {/* Logo */}
                <img
                    src="/image/companylogo.png"
                    alt="SML Logo"
                    style={{ width: size }}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default Logo