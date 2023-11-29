<script lang="ts">
	import Slide from './slide.svelte'
	import Code from './code.svelte'
	import Notes from './notes.svelte'
</script>

<Slide id="titleslide">
	<h3>Trigger in PL/SQL vs. T-SQL</h3>

</Slide>

<Slide id="table_of_contents">
	<h3>Table Of Contents</h3>
	<ol>

	</ol>
</Slide>

<Slide id="syntax">
	<Slide>
		<h3>Syntax</h3>
	</Slide>

	<Slide animate>
		<h3>PL/SQL</h3>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Create Trigger</p>
		<img 
			src="create_trigger.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Trigger Source</p>
		<img 
			src="plsql_trigger_source.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Simple DML Trigger</p>
		<img 
			src="simple_dml_trigger.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Create Trigger</p>
		<img 
			src="plsql_trigger_source.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	
	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Instead of DML Trigger</p>
		<img 
			src="instead_of_trigger.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate tyle="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Create Trigger</p>
		<img 
			src="plsql_trigger_source.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Compound Trigger</p>
		<img 
			src="compound_dml_trigger.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate tyle="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Create Trigger</p>
		<img 
			src="plsql_trigger_source.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>System Trigger</p>
		<img 
			src="system_trigger.gif" 
			alt="insert trigger here"
			style="width: 125%"
		/>
	</Slide>

	<Slide animate style="display:flex; position: absolute; top: 10%">
		<h3>PL/SQL</h3>
		<p>System Trigger</p>
		<div style="display:grid; gap: 2% 5%; grid: auto / auto auto">
			<div>
				<p>Event Clause</p>
				<img 
					src="dml_event_clause.gif" 
					alt="insert trigger here"
				/>
			</div>
			<div>
				<p>Referencing Clause</p>
				<img 
					src="referencing_clause.gif" 
					alt="insert trigger here"
				/>
			</div>
			<div>
				<p>Edition Clause</p>
				<img 
					src="trigger_edition_clause.gif" 
					alt="insert trigger here"
				/>
			</div>
			<div>
				<p>Ordering Clause</p>
				<img 
					src="trigger_ordering_clause.gif" 
					alt="insert trigger here"
				/>
			</div>
		</div>
	</Slide>
</Slide>

<!-- T-SQL Triggers -->
<Slide id"syntax">
	<Slide>
		<h3>Syntax</h3>
	</Slide>

	<Slide animate>
        <h3>T/SQL</h3>
    </Slide>

	<!-- DML Trigger -->
	<Slide>
		<h3>DML Trigger</h3>
		<Code>
			<pre>
                CREATE TRIGGER tr_dml_example
                ON table_name
                AFTER INSERT, UPDATE, DELETE
                AS
                -- Trigger logic here
			</pre>
		</Code>
	</Slide>

	<!-- DDL Trigger -->
	<Slide>
		<h3>DDL Trigger</h3>
		<Code>
			<pre>
                CREATE TRIGGER tr_ddl_example
                ON DATABASE
                FOR CREATE_TABLE, ALTER_TABLE, DROP_TABLE
                AS
                -- Trigger logic here
			</pre>
		</Code>
	</Slide>

	<!-- LOGON/LOGOFF Trigger -->
	<Slide>
		<h3>LOGON/LOGOFF Trigger</h3>
		<Code>
			<pre>
                CREATE TRIGGER tr_logon_example
                ON ALL SERVER
                FOR LOGON
                AS
                -- Trigger logic here
			</pre>
		</Code>

		<Code>
			<pre>
                CREATE TRIGGER tr_logoff_example
                ON ALL SERVER
                FOR LOGOFF
                AS
                -- Trigger logic here
			</pre>
		</Code>
	</Slide>

	<!-- System Trigger for T-SQL -->
	<Slide style="display:flex; position: absolute; top: 10%">
		<h3>T-SQL</h3>
		<p>System Trigger</p>
		<div style="display:grid; gap: 2% 5%; grid: auto / auto auto">
			<div>
				<p>Event Clause</p>
				<img src="tsql_event_clause.gif" alt="insert trigger here" />
			</div>
			<!-- Add other clauses for T-SQL system trigger here -->
		</div>
	</Slide>
</Slide>


<Slide>

</Slide>

