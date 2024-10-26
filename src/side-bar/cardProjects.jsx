import style from './css/style.module.css'

const CardProjects = ({el}) => {
    return (
        <>
        {el.isActive 
        && <div className={style.card} key={el.name}>
            
             <h3>{el.name}</h3><br /><hr />
             <b>{el.message}</b>
            

        </div>}
        </>
    )
}

export default CardProjects