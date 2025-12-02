import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Authentic Plumbing Services'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {/* Gold Icon */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: 'white',
            marginTop: 40,
            textTransform: 'uppercase',
            display: 'flex',
            gap: '10px',
          }}
        >
          Authentic <span style={{ color: '#FFD700' }}>Plumbing</span> Services
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'white',
            marginTop: 20,
            fontWeight: 600,
            opacity: 0.8,
          }}
        >
          24/7 Plumbing Experts in Miami, FL
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

