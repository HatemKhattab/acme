import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function removeDuplicateUsers() {
  // Remove duplicate users keeping the first occurrence based on email
  const result = await sql`
    DELETE FROM users
    WHERE ctid NOT IN (
      SELECT MIN(ctid)
      FROM users
      GROUP BY email
    )
  `;
  return result;
}

async function removeDuplicateCustomers() {
  // Remove duplicate customers keeping the first occurrence based on email
  const result = await sql`
    DELETE FROM customers
    WHERE ctid NOT IN (
      SELECT MIN(ctid)
      FROM customers
      GROUP BY email
    )
  `;
  return result;
}

async function removeDuplicateInvoices() {
  // Remove duplicate invoices keeping the first occurrence based on customer_id, amount, status, and date
  const result = await sql`
    DELETE FROM invoices
    WHERE ctid NOT IN (
      SELECT MIN(ctid)
      FROM invoices
      GROUP BY customer_id, amount, status, date
    )
  `;
  return result;
}

async function removeDuplicateRevenue() {
  // Remove duplicate revenue entries keeping the first occurrence based on month
  const result = await sql`
    DELETE FROM revenue
    WHERE ctid NOT IN (
      SELECT MIN(ctid)
      FROM revenue
      GROUP BY month
    )
  `;
  return result;
}

export async function DELETE() {
  try {
    const results = await sql.begin(async (sql) => {
      const userResults = await removeDuplicateUsers();
      const customerResults = await removeDuplicateCustomers();
      const invoiceResults = await removeDuplicateInvoices();
      const revenueResults = await removeDuplicateRevenue();
      
      return {
        usersDeleted: userResults.count,
        customersDeleted: customerResults.count,
        invoicesDeleted: invoiceResults.count,
        revenueDeleted: revenueResults.count
      };
    });

    return Response.json({ 
      message: 'Duplicates removed successfully',
      results
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
