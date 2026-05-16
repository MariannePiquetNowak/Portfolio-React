
const JobsList = ({jobs}) => {
  return (
    <div className="jobs_grid">
        {
            jobs?.map((job, i) => {
                return (
                    <div className={`card__container jobs__${i}`}>
                        <div  className={`card jobs__card `} >
                            <h2 className="jobs__subtitle">{`${job.company}`}</h2>
                            <span className="jobs__date">{`${job.date}`}</span>
                            <ul>
                                { 
                                    job.tasks.map((t, index) => <li key={`task_${index}`}>{t}</li> ) 
                                }
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default JobsList
