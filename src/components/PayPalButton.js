"use client";

import { useEffect, useRef } from 'react';

export default function PayPalButton() {
  const paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AboKmV2BZTx5JwW8QdYRnYkTWH49sFTZgKv5yY6jOZSnPNRM-f3Vexi63HiK58uBFeVni7tx69vgatuD&vault=true&intent=subscription';
    script.addEventListener('load', () => {
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'black',
          layout: 'vertical',
          label: 'subscribe',
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            plan_id: 'P-7S155133PN428040AM4DB5EQ',
          });
        },
        onApprove: function (data, actions) {
          alert('Subscription completed!');
        },
      }).render(paypalRef.current);
    });
    document.body.appendChild(script);
  }, []);

  return <div ref={paypalRef}></div>;
}
