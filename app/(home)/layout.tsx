import { ChildProps } from '../../types'

const HomeLayout = ({ children }: ChildProps) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default HomeLayout