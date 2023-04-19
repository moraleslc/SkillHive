class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.integer :employeeID
      t.integer :teamID
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
