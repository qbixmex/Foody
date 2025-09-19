import ProcessCard from "../process-card/ProcessCard.component";
import { processes } from "./data";
import styles from "./styles.module.css";

export const Process = () => {
  return (
    <div className={styles.process}>
      <h2 className={styles.heading}>Our Food Process</h2>
      <div className={styles.processCards}>
        {processes.map(({ id, heading, imageUrl, description }) => (
          <ProcessCard
            key={id}
            heading={heading}
            imageUrl={imageUrl}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;