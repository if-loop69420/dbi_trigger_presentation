<script lang="ts">
	import Slide from './slide.svelte'
	import Code from './code.svelte'
	import Notes from './notes.svelte'
	import Markdown from './markdown.svelte';
</script>

<Slide id="titleslide">
	<h3>Trigger in PL/SQL vs. T-SQL</h3>

</Slide>

<Slide id="table_of_contents">
	<h3>Table Of Contents</h3>
	<ol>
		<li>Was ist ein Trigger?</li>
		<li>Arten von Triggern</li>
		<li>Syntax PL/SQL</li>
		<li>Syntax T/SQL</li>
		<li>Vor-/Nachteile</li>
		<li>Live Demo</li>
	</ol>
</Slide>

<Slide>
	<h3>Was ist ein Trigger?</h3>
	<p>
		Ein Trigger ist ein Stück Code, dass automatisch ausgeführt wird, wenn eine bestimmte Aktion in einer Datenbank ausgeführt wird.
		Es kann entweder vor, nach, oder anstatt der Effekte des Ereignisses ausgeführt werden, das es auslöst.
	</p>
</Slide>

<Slide>
	<h3>Arten von Triggern in PL/SQL vs. T-SQL</h3>
	<div style="display: grid; grid: auto / auto auto; gap: 2% 5%">
		<div>
			<h4>T-SQL</h4>
			<ul>
				<li>After Trigger</li>
				<li>Instead of Trigger</li>
				<li>For Trigger</li>
			</ul>
		</div>
		<div>
			<h4>PL/SQL</h4>
			<ul>
				<li>Before Trigger</li>
				<li>After Trigger</li>
				<li>Instead of Trigger</li>
				<li>Compound Trigger</li>
				<li>System Trigger</li>
				<li>For Trigger</li>
			</ul>
		</div>
	</div>
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
		<Code>
			{`
				CREATE OR ALTER TRIGGER TriggerExample ...
			`}
		</Code>
	</Slide>

	<Slide animate style="display:flex; justify-content:center;">
		<h3>PL/SQL</h3>
		<p>Trigger Source</p>
		<img
				src="plsql_trigger_source.gif"
				alt="insert trigger here"
				style="width: 125%"
		/>
		<Code>
			{`
				CREATE OR ALTER TRIGGER TriggerExample ... ON TestTable ...
			`}
		</Code>
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

	<Slide animate>
		<h3>PL/SQL</h3>
		<p>DML Trigger Example</p>
		<Code>
			{`
				CREATE OR REPLACE TRIGGER AfterTriggerExample
				AFTER INSERT OR UPDATE OR DELETE ON TestTable
				BEGIN
					DBMS_OUTPUT.PUT_LINE('AFTER Trigger wurde ausgelöst');
				END;
			`}
		</Code>
		<Code>
			{`
				CREATE OR REPLACE TRIGGER BeforeTriggerExample
				BEFORE INSERT OR UPDATE OR DELETE ON TestTable
				BEGIN
					DBMS_OUTPUT.PUT_LINE('BEFORE Trigger wurde ausgelöst');
				END; 
			`}
		</Code>
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

	<Slide>
		<h3>PL/SQL</h3>
		<p>Instead of DML Trigger</p>
		<Code>
			{`
				CREATE OR REPLACE TRIGGER InsteadOfTriggerExample
				INSTEAD OF INSERT OR UPDATE OR DELETE ON TestTable
				BEGIN
					DBMS_OUTPUT.PUT_LINE('INSTEAD OF Trigger wurde ausgelöst');
				END;
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>PL/SQL</h3>
		<p>Alte und Neue Daten</p>
		<Code>
			{`
				CREATE OR REPLACE TRIGGER DMLTriggerExample
				AFTER INSERT OR UPDATE OR DELETE ON TestTable
				FOR EACH ROW
				BEGIN
					DBMS_OUTPUT.PUT_LINE('AFTER Trigger wurde ausgelöst');
					DBMS_OUTPUT.PUT_LINE(:OLD.Name);
					DBMS_OUTPUT.PUT_LINE(:NEW.Name);
				END;
			`}
		</Code>
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

	<Slide>
		<h3>PL/SQL</h3>
		<p>Compound Trigger Example</p>
		<Code>
			{`
			CREATE OR REPLACE TRIGGER salary_check_trigger
			FOR UPDATE OF salary ON employees
			COMPOUND TRIGGER

					-- Statement-level trigger action
					BEFORE STATEMENT IS
					BEGIN
							DBMS_OUTPUT.PUT_LINE('Statement-level trigger: Checking salary updates...');
							-- Additional statement-level actions can be added here
					END BEFORE STATEMENT;

			`}
		</Code>
	</Slide>

	<Slide>
		<Code>
			{`
			
					-- Row-level trigger action
					BEFORE EACH ROW IS
					BEGIN
							DBMS_OUTPUT.PUT_LINE('Row-level trigger: Checking employee ' || :OLD.employee_id || ' salary update...');
							IF :NEW.salary < 1000 THEN
									:NEW.salary := 1000; -- Set a minimum salary of 1000 if the new salary is less
							ELSIF :NEW.salary > 100000 THEN
									:NEW.salary := 100000; -- Set a maximum salary of 100000 if the new salary is more
							END IF;
					END BEFORE EACH ROW;
			`}
		</Code>

	</Slide>

	<Slide>
		<Code>
			{`
					-- Row-level trigger action after all rows have been processed
					AFTER EACH ROW IS
					BEGIN
							DBMS_OUTPUT.PUT_LINE('Row-level trigger: Employee ' || :OLD.employee_id || ' salary updated to ' || :NEW.salary);
							-- Additional row-level actions can be added here
					END AFTER EACH ROW;

					-- Statement-level trigger action after all rows have been processed
					AFTER STATEMENT IS
					BEGIN
							DBMS_OUTPUT.PUT_LINE('Statement-level trigger: Salary updates checked.');
							-- Additional statement-level actions can be added here
					END AFTER STATEMENT;

			END salary_check_trigger;
			`}
		</Code>
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

	<Slide>
		<h3>PL/SQL</h3>
		<p>Row Level Trigger</p>
		<Code>
			{`
				CREATE OR REPLACE TRIGGER salary_audit_trigger
				AFTER UPDATE OF salary ON employees
				FOR EACH ROW
				DECLARE
						v_old_salary employees.salary%TYPE;
				BEGIN
						IF :NEW.salary != :OLD.salary THEN
								INSERT INTO salary_audit (employee_id, old_salary, new_salary, change_date)
								VALUES (:OLD.employee_id, :OLD.salary, :NEW.salary, SYSDATE);
						END IF;
				END;
			`}
		</Code>
	</Slide>

	<Slide>
		<h3>PL/SQL</h3>
		<p>Vor- und Nachteile</p>
		<div style="display:grid; gap: 2% 5%; grid: auto / auto auto">
			<Markdown>
				{`
					#### Vorteile (PL/SQL)
					* Leistungsstark
					* Mit Java(und anderen JVM Sprachen) kompatibel
					* Bessere Performance
					* Transaktionskontrolle
					* Wiederverwendbarkeit
				`}
			</Markdown>

			<Markdown>
				{`
					#### Nachteile (PL/SQL)
					* Plattformspezifisch
					* Komplexität
					* Skalierbarkeit
					* Debugging und Testing
					* Ressourcenverbrauch
				`}
			</Markdown>

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
		<h3>After Trigger</h3>
		<Code>
			{`
			CREATE TRIGGER BananeInMeinemAfterTriggerExample
			ON dbo.TestTable
			AFTER INSERT, UPDATE, DELETE
			AS
			BEGIN
				PRINT 'AFTER Trigger wurde ausgelöst';
			END;

			INSERT INTO dbo.TestTable (Name) VALUES ('TestName');
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
	<h5 class="party">Live Demo Time</h5>
</Slide>

<style>
	@keyframes partyTime {
		0% {
			color: #ff0000;
		}
		25% {
			color: #00ff00;
		}
		50% {
			color: #00e1f5;
		}
		75% {
			color: #ffff00;
		}
		100% {
			color: #ff00ff;
		}
	}

	.party {
		animation: partyTime infinite 1s;
	}
</style>

