import React, { ReactNode, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavigationContext } from '../../context/navigation.context';

const InViewWrapper: React.FC<{ children: ReactNode; _id: string }> = ({
  children,
  _id,
}) => {
  const { updateInview } = useContext(NavigationContext);
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      const _id = entry?.target.id === undefined ? 'home' : entry?.target.id;
      // console.log(_id);
      updateInview(_id);
    }
  }, [inView]);
  return (
    <section ref={ref} id={_id}>
      {children}
    </section>
  );
};

export default InViewWrapper;
