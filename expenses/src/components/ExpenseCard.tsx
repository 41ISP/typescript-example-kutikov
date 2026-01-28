export const ExpenseCard = ({name, id, category, amount}) => {
    return (
        <div className="expense">
            <div>
                {name}
                <div className="category">Food</div>
            </div>
            <div className="amount">$12.50</div>
        </div>
    )
}