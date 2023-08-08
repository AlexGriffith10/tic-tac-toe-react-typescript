import styles from './title.module.css'

interface TitleProps {
    titleContent: string
}

export const Title: React.FC<TitleProps> = ({titleContent}) => {
    return(
        <div className={styles.Title}>
            {titleContent}
        </div>
    )
}