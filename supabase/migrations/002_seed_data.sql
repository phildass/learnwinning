
-- Seed data for development/testing
-- Note: In production, this data should not be used

-- Insert sample users (for demo purposes only)
INSERT INTO users (id, phone_number, full_name, age, qualification, has_paid, payment_date, registration_date, wants_certificate)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', '+91 98765 43210', 'Rajesh Kumar', 28, 'MBA', true, NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days', true),
  ('550e8400-e29b-41d4-a716-446655440002', '+91 87654 32109', 'Priya Sharma', 32, 'B.Tech', true, NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days', true),
  ('550e8400-e29b-41d4-a716-446655440003', '+91 76543 21098', 'Amit Patel', 25, 'BCA', true, NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days', true);

-- Insert user progress
INSERT INTO user_progress (user_id, current_chapter, completed_chapters, last_accessed)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 8, ARRAY[1,2,3,4,5,6,7], NOW()),
  ('550e8400-e29b-41d4-a716-446655440002', 11, ARRAY[1,2,3,4,5,6,7,8,9,10], NOW()),
  ('550e8400-e29b-41d4-a716-446655440003', 4, ARRAY[1,2,3], NOW());

-- Insert test results
INSERT INTO test_results (user_id, chapter_number, score, passed, answers, completed_at)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 1, 85, true, '{"1":1,"2":2,"3":1,"4":0,"5":2}'::jsonb, NOW() - INTERVAL '4 days'),
  ('550e8400-e29b-41d4-a716-446655440001', 2, 92, true, '{"1":1,"2":2,"3":1,"4":0,"5":2}'::jsonb, NOW() - INTERVAL '3 days'),
  ('550e8400-e29b-41d4-a716-446655440002', 1, 90, true, '{"1":1,"2":2,"3":1,"4":0,"5":2}'::jsonb, NOW() - INTERVAL '2 days'),
  ('550e8400-e29b-41d4-a716-446655440002', 2, 88, true, '{"1":1,"2":2,"3":1,"4":0,"5":2}'::jsonb, NOW() - INTERVAL '1 day');

-- Insert certificate for completed user
INSERT INTO certificates (user_id, issued_date)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440002', NOW());
