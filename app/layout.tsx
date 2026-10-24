import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Syed Jawaid | Cloud & AI Platform Engineer',description:'Syed Jawaid — cloud, Kubernetes, OpenShift, DevOps automation and AI platform engineering.',metadataBase:new URL('https://syed.dev'),openGraph:{title:'Syed Jawaid | Cloud & AI Platform Engineer',description:'Building secure, scalable, resilient enterprise platforms.',url:'https://syed.dev',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
