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
		<li>Syntax PL/SQL</li>
		<li>Syntax T/SQL</li>
		<li>Vor-/Nachteile</li>
		<li>Live Demo</li>
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
<Slide id="syntax">
	<Slide>
		<h3>Syntax</h3>
	</Slide>

	<Slide animate>
        <h3>T/SQL</h3>
    </Slide>

	<!-- DML Trigger -->
	<Slide animate style="display:flex; justify-content:center;">
		<h3>DML Trigger</h3>
		<img
		    src="dmltrigger.png"
		    style="width: 125%"
		/>
		<Notes>
          <h3>DML Trigger Syntax:</h3>
          <p>
            Ein DML (Data Manipulation Language) Trigger reagiert auf Änderungen in Daten einer Tabelle oder Sicht.
          </p>
          <ul>
            <li>ON [ table | view ]: Specifies the triggering table or view.</li>
            <li>[ FOR | AFTER | INSTEAD OF ]: Determines the trigger execution timing.</li>
            <li>[ [ INSERT ] [ ; ] [ UPDATE ] [ ; ] [ DELETE ] ]: Defines the triggering events.</li>
            <li>WITH APPEND: Allows appending multiple triggers to the same event.</li>
            <li>NOT FOR REPLICATION: Prevents trigger execution during replication changes.</li>
          </ul>
        </Notes>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
	    <Code>
	    {`
	    -- DML Trigger Example
        CREATE TRIGGER dbo.AfterUpdateTrigger
        ON dbo.YourTable
        AFTER UPDATE
        AS
        BEGIN
          -- Your trigger logic here
          PRINT 'Rows in YourTable were updated.';
        END;
	    `}
	    </Code>
	</Slide>

	<!-- DDL Trigger -->
	<Slide animate style="display:flex; justify-content:center;">
		<h3>DDL Trigger</h3>
        <img
		    src="ddltrigger.png"
		    style="width: 125%"
		/>
		<Notes>
          <h3>DDL Trigger Syntax:</h3>
          <p>
            Ein DDL (Data Definition Language) Trigger reagiert auf Strukturänderungen in der Datenbank.
          </p>
          <ul>
            <li>ON [ ALL SERVER | DATABASE ]: Specifies whether the trigger is on the entire server or a specific database.</li>
            <li>[ FOR | AFTER ] [ event_type | event_group ] [ ,...n ]: Defines triggering events or event groups.</li>
            <li>WITH ENCRYPTION: Optionally encrypts the trigger text.</li>
            <li>EXECUTE AS Clause: Sets the security context for trigger execution.</li>
          </ul>
        </Notes>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
        <Code>
        {`
        -- DDL Trigger Example
        CREATE TRIGGER ddlTriggerExample
        ON DATABASE
        FOR CREATE_TABLE, ALTER_TABLE, DROP_TABLE
        AS
        BEGIN
          -- Your trigger logic here
          PRINT 'A table was created, altered, or dropped.';
        END;
        `}
        </Code>
    </Slide>

	<!-- LOGON Trigger -->
	<Slide animate style="display:flex; justify-content:center;">
		<h3>LOGON Trigger</h3>
        <img
		    src="logontrigger.png"
		    style="width: 125%"
		/>
		<Notes>
          <h3>LOGON Trigger Syntax:</h3>
          <p>
            Ein LOGON Trigger reagiert auf Benutzeranmeldeereignisse auf der Serverebene.
          </p>
          <ul>
            <li>ON ALL SERVER: Indicates the trigger is on the entire server.</li>
            <li>[ FOR | AFTER ] LOGON: Determines the trigger execution timing for logon events.</li>
            <li>WITH ENCRYPTION: Optionally encrypts the trigger text.</li>
            <li>EXECUTE AS Clause: Sets the security context for trigger execution.</li>
          </ul>
        </Notes>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
        <Code>
        {`
        -- LOGON Trigger Example
        CREATE TRIGGER logonTriggerExample
        ON ALL SERVER
        AFTER LOGON
        AS
        BEGIN
          -- Your trigger logic here
          PRINT 'User logged in to the server.';
        END;
        `}
        </Code>
    </Slide>

    <Slide>
        <h3>Vor- und Nachteile von T/SQL</h3>
        <div style="display: flex; justify-content: space-between;">
            <div style="flex: 1;">
                <h4>Vorteile (T/SQL)</h4>
                <ul>
                    <li>Breite Integration mit Microsoft-Produkten</li>
                    <li>Transact-SQL-Sprachfunktionen</li>
                    <li>Unterstützung von XML-Daten</li>
                    <!-- Weitere Vorteile hinzufügen -->
                </ul>
            </div>
            <div style="flex: 1;">
                <h4>Nachteile (T/SQL)</h4>
                <ul>
                    <li>Plattformabhängig (Microsoft SQL Server)</li>
                    <li>Begrenzte Unterstützung für einige PL/SQL-Funktionen</li>
                    <li>Eingeschränkte Portabilität</li>
                    <!-- Weitere Nachteile hinzufügen -->
                </ul>
            </div>
        </div>
    </Slide>

</Slide>

<Slide id="Beispiele">
    <h5>Live Demo</h5>
</Slide>

