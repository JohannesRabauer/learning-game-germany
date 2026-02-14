import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ConfettiInstance = (options?: any) => void;

export function useConfetti() {
  const refAnimationInstance = useRef<ConfettiInstance | null>(null);

  const getInstance = useCallback((instance: ConfettiInstance | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const fire = useCallback(() => {
    refAnimationInstance.current?.({
      spread: 70,
      startVelocity: 30,
      decay: 0.92,
      particleCount: 100,
      origin: { y: 0.6 },
    });
  }, []);

  const fireBig = useCallback(() => {
    const instance = refAnimationInstance.current;
    if (!instance) return;
    instance({ spread: 100, startVelocity: 45, decay: 0.91, particleCount: 150, origin: { y: 0.5 } });
    setTimeout(() => {
      instance({ spread: 120, startVelocity: 40, decay: 0.92, particleCount: 100, origin: { x: 0.3, y: 0.6 } });
    }, 200);
    setTimeout(() => {
      instance({ spread: 120, startVelocity: 40, decay: 0.92, particleCount: 100, origin: { x: 0.7, y: 0.6 } });
    }, 400);
  }, []);

  return { getInstance, fire, fireBig };
}
