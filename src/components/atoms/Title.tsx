interface TitleProps {
    mainTitle: string,
    subTitle?: string,
}

export const Title =
    ({ mainTitle, subTitle }: TitleProps) => {
        return (
            <>
                <h2>
                    Title: {mainTitle}
                </h2>
                <h3>
                    {subTitle}
                </h3>
            </>
        )
    }