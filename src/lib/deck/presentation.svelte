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
		<p>Mögliche Trigger</p>
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
		<p>Mögliche Trigger</p>
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
		<p>Mögliche Trigger</p>
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

	<Slide>
		<h3>PL/SQL</h3>
		<p>System Trigger</p>

		<Code id="code" lines style="width: 120%">
			{`
				CREATE OR REPLACE TRIGGER logon_echo_name AFTER LOGON ON DATABASE
				BEGIN
				    DBMS_OUTPUT.PUT_LINE(user);
				END;
				/
			`}
		</Code>

	</Slide>

	<Slide animate style="display:flex; position: absolute; top: 10%">
		<h3>PL/SQL</h3>
		<p>Andere Clauses</p>
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
		<h3>Create Trigger</h3>
		<img
				src="dmltrigger.png"
				style="width: 125%"
		/>
		<Notes>
			<h3>Create Trigger Syntax:</h3>
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

	<Slide>
		<h3>Arten von Triggern</h3>

		<ul>
			<li>After Trigger (Table)</li>
			<li>Instead of Trigger (Table und View)</li>
			<li>For Trigger (Views)</li>
		</ul>
	</Slide>

	<Slide>
		<h3>After Trigger</h3>
		<Code>
			{`
			CREATE TRIGGER AfterTriggerExample
			ON dbo.TestTable
			AFTER INSERT, UPDATE, DELETE
			AS
			BEGIN
				PRINT 'AFTER Trigger wurde ausgelöst';
			END;

			INSERT INTO dbo.TestTable (Name) VALUES ('TestName');

			SELECT * FROM dbo.AuditTable;
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>Instead of Trigger</h3>
		<Code>
			{`
			CREATE TRIGGER InsteadOfTriggerExample
			ON dbo.TestTable
			INSTEAD OF INSERT, UPDATE, DELETE
			AS
			BEGIN
				PRINT 'INSTEAD OF Trigger wurde ausgelöst';
			END;

			INSERT INTO dbo.TestTable (Name) VALUES ('TestName');
			UPDATE dbo.TestView SET Name = 'UpdatedName' WHERE Name = 'TestName';
			SELECT * FROM dbo.TestTable;
			SELECT * FROM dbo.AuditTable;
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>For Trigger</h3>
		<Code>
			{`
			CREATE TRIGGER ForInsertTrigger
			ON dbo.TestTable
			FOR INSERT
			AS
			BEGIN
				PRINT 'FOR INSERT Trigger wurde ausgelöst';
			END;

			INSERT INTO dbo.TestTable (ID, Name) VALUES (1, 'TestName');
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>Zugriff auf alte und neue Daten</h3>
		<Code>
			{`
			CREATE OR ALTER TRIGGER tr_SampleTrigger
			ON dbo.YourTable
			AFTER UPDATE
			AS
			BEGIN
				SELECT * FROM deleted;
				SELECT * FROM inserted;
			END;
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>Statement Trigger</h3>
		<Code>
			{`
			CREATE OR ALTER TRIGGER state_trigger
			ON Log
			AFTER Update
			AS
			BEGIN
			PRINT('TEST!')
			END
			`}
		</Code>
		<h3>Row Level Trigger</h3>
		<p>Nicht existent</p>
	</Slide>

	<Slide>
		<h3>Bezug eines Triggers</h3>
		<ul>
			<li>DML</li>
			<li>DDL</li>
			<li>DB</li>
		</ul>
	</Slide>

	<Slide>
		<h3>DML</h3>
		<Code>
			{`
			CREATE TRIGGER AfterEmployeeInsert
			ON dbo.Employees
			AFTER INSERT
			AS
			BEGIN
				SET NOCOUNT ON;
				INSERT INTO dbo.EmployeeInsertAudit (EmployeeID, InsertDate)
				SELECT EmployeeID, GETDATE()
				FROM inserted;
			END;

			INSERT INTO dbo.Employees (EmployeeID, FirstName, LastName, Salary)
			VALUES (1, 'John', 'Doe', 50000.00);
			SELECT * FROM dbo.EmployeeInsertAudit;
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>DDL</h3>
		<Code>
			{`
			CREATE TRIGGER AfterCreateTable
			ON DATABASE
			FOR CREATE_TABLE
			AS
			BEGIN
				INSERT INTO dbo.DDLAudit (EventType, EventDate)
				VALUES ('CREATE TABLE', GETDATE());
			END;

			CREATE TABLE dbo.TestTable (
				ID INT PRIMARY KEY,
				Name NVARCHAR(50)
			);
			SELECT * FROM dbo.DDLAudit;
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>Vor- und Nachteile von T/SQL</h3>
		<div style="display: flex; justify-content: space-between;">
			<div style="flex: 1;">
				<h4>Vorteile (T/SQL)</h4>
				<ul>
					<li>Prozedurale Programmierung</li>
					<li>Transaktionskontrolle</li>
					<li>Integration von .NET</li>
					<li>Optimierte Abfrageleistung</li>
					<li>Mehrere Datenbankobjekte</li>
					<!-- Weitere Vorteile hinzufügen -->
				</ul>
			</div>
			<div style="flex: 1;">
				<h4>Nachteile (T/SQL)</h4>
				<ul>
					<li>Plattformspezifisch</li>
					<li>Komplexität</li>
					<li>Begrenzte Unterstützung für fortgeschrittene Funktionen</li>
					<li>Abhängigkeit von der Datenbankplattform</li>
					<li>Eingeschränkte Werkzeugunterstützung</li>
					<!-- Weitere Nachteile hinzufügen -->
				</ul>
			</div>
		</div>
		<Notes>
			<h3>Erklärungen:</h3>
			<ul>
				<li><strong>Prozedurale Programmierung:</strong> T-SQL ermöglicht prozedurale Programmierung, was die Erstellung wiederverwendbarer Code-Logik auf der Datenbankebene erleichtert.</li>
				<li><strong>Transaktionskontrolle:</strong> Mit Mechanismen wie COMMIT und ROLLBACK ermöglicht T-SQL die effektive Verwaltung von Transaktionen zur Sicherstellung der Datenkonsistenz.</li>
				<li><strong>Integration von .NET:</strong> T-SQL kann nahtlos in Anwendungen integriert werden, die auf dem .NET-Framework basieren, was die Verbindung von Datenbankoperationen und Anwendungslogik erleichtert.</li>
				<li><strong>Optimierte Abfrageleistung:</strong> Durch die Verwendung von Indexen und Abfrageoptimierern bietet T-SQL Mittel zur Verbesserung der Abfrageleistung, was zu schnelleren Datenbankabfragen führen kann.</li>
				<li><strong>Mehrere Datenbankobjekte:</strong> T-SQL ermöglicht die Definition verschiedener Datenbankobjekte wie Tabellen, Ansichten, gespeicherte Prozeduren usw., was zu einer effizienten Datenbankstruktur führt.</li>
				<li><strong>Plattformspezifisch:</strong> T-SQL ist spezifisch für Microsoft SQL Server und möglicherweise nicht mit anderen SQL-Datenbanken kompatibel, was die Portabilität des Codes beeinträchtigen kann.</li>
				<li><strong>Komplexität:</strong> In komplexen Szenarien kann T-SQL-Code schwer zu verstehen und zu warten sein, insbesondere wenn Prozeduren und Trigger stark verschachtelt oder umfangreich sind.</li>
				<li><strong>Begrenzte Unterstützung für fortgeschrittene Funktionen:</strong> Im Vergleich zu einigen anderen Datenbanksystemen bietet T-SQL möglicherweise weniger fortgeschrittene Funktionen und Optionen.</li>
				<li><strong>Abhängigkeit von der Datenbankplattform:</strong> Da T-SQL speziell für SQL Server entwickelt wurde, ist der Code stark von den Funktionen und Einschränkungen dieser Plattform abhängig.</li>
				<li><strong>Eingeschränkte Werkzeugunterstützung:</strong> Obwohl es einige ausgezeichnete Tools zur Entwicklung und Verwaltung von T-SQL gibt, kann die Unterstützung durch Tools im Vergleich zu anderen SQL-Varianten begrenzt sein.</li>
			</ul>
		</Notes>
	</Slide>
</Slide>

<Slide id="Beispiele">
	<h5>Live Demo</h5>
</Slide>

