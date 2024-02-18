import HomeSlide from "./(pages)/home/components/homeSlide";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <HomeSlide />
        </main>
    );
}
