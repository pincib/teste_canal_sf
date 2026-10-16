'use client';
export default function LightboxModal({open,onClose}:{open:boolean,onClose:()=>void}){return open?<div className="lightbox" role="dialog" aria-modal="true" aria-label="Prancha técnica"><button onClick={onClose} aria-label="Fechar">×</button><img src="/lo0222/assets/prancha/prancha-1.png" alt="Prancha técnica do imóvel"/></div>:null}
