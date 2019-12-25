export default function GoBackButton(props) {
    return <Link>
               <button onClick={() => {
               props.history.push('/books')
               }
               } className="go-back">BACK</button>
            </Link>
}